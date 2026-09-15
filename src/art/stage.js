// 舞台渲染：加载场景背景与人物立绘，按说话人切换表情
// 资源为 WebP（体积约为 PNG 的 4%，且保留立绘的透明通道）

const SCENE_PATH = 'assets/scenes';
const CHARACTER_PATH = 'assets/characters';
const IMAGE_EXTENSION = 'webp';

// 剧本里的旧场景名 → 实际图片文件名
const SCENE_ALIASES = {
  classroom: 'classroom-day',
  home: 'home-dining',
  bedroom: 'bedroom-night',
  'night-desk': 'bedroom-night',
  default: 'classroom-day',
};

// 说话人 → 立绘文件前缀
export const SPEAKER_PORTRAITS = {
  '林澈': 'linche',
  '顾言': 'guyan',
  '许禾': 'xuhe',
  '沈老师': 'shen',
  '妈妈': 'mother',
};

// 每个角色实际存在的表情后缀，用于兜底判断
const AVAILABLE_EMOTIONS = {
  protagonist: ['worry', 'smile', 'firm'],
  linche: ['plead', 'sulk', 'grin'],
  guyan: ['sharp', 'pause', 'soft'],
  xuhe: ['sorry', 'happy', 'try'],
  shen: ['ask', 'wait', 'nod'],
  mother: ['worry', 'upset', 'quiet'],
};

const ALL_SCENES = [
  'classroom-day', 'classroom-sunset', 'corridor', 'stairwell',
  'office', 'home-dining', 'bedroom-night', 'library',
  'hall', 'school-gate', 'entangled', 'clarity',
];

export function resolveSceneFile(sceneId) {
  const name = SCENE_ALIASES[sceneId] || sceneId;
  return ALL_SCENES.includes(name) ? name : 'classroom-day';
}

// 立绘文件名：基础名 + 表情后缀（表情不存在时回退到基础立绘）
export function resolvePortraitFile(portraitId, emotion) {
  if (!emotion) return portraitId;
  const supported = AVAILABLE_EMOTIONS[portraitId] || [];
  return supported.includes(emotion) ? `${portraitId}-${emotion}` : portraitId;
}

// 预加载：避免切场景时闪白
export function preloadArtwork() {
  ALL_SCENES.forEach((name) => {
    const image = new Image();
    image.src = `${SCENE_PATH}/${name}.${IMAGE_EXTENSION}`;
  });

  Object.entries(AVAILABLE_EMOTIONS).forEach(([portraitId, emotions]) => {
    [portraitId, ...emotions.map((emotion) => `${portraitId}-${emotion}`)].forEach((file) => {
      const image = new Image();
      image.src = `${CHARACTER_PATH}/${file}.${IMAGE_EXTENSION}`;
    });
  });
}

export function renderTitleArt() {
  const container = document.getElementById('title-art');
  container.innerHTML =
    `<img class="title-art-image" src="${SCENE_PATH}/school-gate.${IMAGE_EXTENSION}" alt="">`;
}

let currentSceneFile = null;

export function renderStageArt(sceneId, characters = []) {
  const backdrop = document.getElementById('stage-backdrop');
  const cast = document.getElementById('stage-cast');
  const sceneFile = resolveSceneFile(sceneId);

  // 同一张背景连续出现时不重画，避免每句台词都淡入一次
  if (sceneFile !== currentSceneFile) {
    currentSceneFile = sceneFile;
    backdrop.innerHTML =
      `<img class="scene-photo" src="${SCENE_PATH}/${sceneFile}.${IMAGE_EXTENSION}" alt="">`;
    const image = backdrop.querySelector('.scene-photo');
    requestAnimationFrame(() => image.classList.add('is-shown'));
  }

  renderCast(cast, characters);
}

function renderCast(cast, characters) {
  const signature = characters.map((entry) => `${entry.id}:${entry.emotion || ''}`).join('|');
  if (cast.dataset.cast === signature) return;
  cast.dataset.cast = signature;

  cast.innerHTML = '';

  characters.forEach((entry, index) => {
    const position = entry.position || defaultPosition(index, characters.length);
    const file = resolvePortraitFile(entry.id, entry.emotion);

    const slot = document.createElement('div');
    slot.className = `cast-slot cast-${position}`;
    slot.dataset.portraitId = entry.id;
    slot.innerHTML = `<img class="cast-portrait" src="${CHARACTER_PATH}/${file}.${IMAGE_EXTENSION}" alt="">`;
    cast.appendChild(slot);

    requestAnimationFrame(() => slot.classList.add('is-present'));
  });
}

// 说话的人亮起来，其他人压暗
export function updateCastFocus(speaker) {
  const speakingId = SPEAKER_PORTRAITS[speaker] || (speaker ? null : 'protagonist');
  const slots = document.querySelectorAll('.cast-slot');

  slots.forEach((slot) => {
    const isSpeaking = speakingId !== null && slot.dataset.portraitId === speakingId;
    slot.classList.toggle('is-speaking', isSpeaking);
    slot.classList.toggle('is-dim', speakingId !== null && !isSpeaking);
  });
}

function defaultPosition(index, total) {
  if (total === 1) return 'center';
  if (total === 2) return index === 0 ? 'left' : 'right';
  return ['left', 'center', 'right'][index] || 'center';
}
