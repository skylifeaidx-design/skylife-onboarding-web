// --- Data ---
const comicScripts = [
    {
        title: "🎤 1부: 오프닝 및 스카이라이프 TMI",
        text: "안녕하세요, 신입사원 여러분! 스카이라이프 <strong>DX지원팀</strong>에 새롭게 합류하신 것을 격렬하게 환영합니다. 저는 3년째 홈페이지 시스템 기획(개발)을 담당하고 있는 가이드입니다.<br><br>어젯밤에 다들 푹 주무셨나요? 저는 오늘 여러분 만날 생각에 설레서 잠을 좀 설쳤습니다. 여러분도 곧 경험하시게 될 우리 파트의 아주 다이나믹한 일상이랍니다.<br><br>여러분, 우리가 만드는 스카이라이프 홈페이지는 단순한 게시판이 아닙니다. 고객이 직접 'ipit TV' 같은 고화질 방송이나 빠른 인터넷을 신청하고, 최근 핫한 'eSIM' 모바일 요금제를 실물 유심 없이 즉시 셀프 개통하는 모든 여정이 우리 손에서 이루어집니다. 게다가 요즘엔 AI 스포츠 중계 솔루션까지 서비스 영역을 확장했죠. 전국 어디서나 퀄리티 높고 합리적인 미디어를 제공한다는 자부심을 가지셔도 좋습니다!"
    },
    {
        title: "💻 2부: 우리가 하는 진짜 일!",
        text: "자, 그럼 우리 파트가 관리하는 채널이 뭔지 볼까요? 우리는 PC와 모바일 웹은 기본이고, 안드로이드/iOS 모바일 앱, 그리고 TV와 연동되는 안드로이드 리모콘 앱까지 커버합니다. 특히 기업 홈페이지에서는 공시자료, 투자정보, 지속가능경영 같은 회사의 얼굴 역할도 톡톡히 하고 있죠.<br><br>우리가 매일 출근해서 주로 어떤 일을 할까요? 2025년 ITO 운영 현황을 보면 재밌는 통계가 있습니다. 작년 한 해 동안 우리가 처리한 작업 건수 1위가 무엇일까요? 바로 <strong style='color: var(--primary)'>'콘텐츠 수정/추가'</strong>로 무려 690건입니다. 1년 365일 내내 요금제 업데이트, 배너 교체, S-머니 샵이나 제휴카드 이벤트 페이지를 찍어내듯 만들고 있죠.<br><br>홈페이지 통합 개발 공수 분포를 살펴보면 화면단에서 고객과 만나는 우리 <strong>프론트엔드 파트 영역이 892Day로 가장 큰 비중을 차지</strong>하고 있습니다. 그만큼 서비스 최전선에서 고객과 만나는 우리 웹 파트의 역할이 막중하다는 뜻입니다. 자부심을 가지세요!"
    }
];

const quizData = [
    {
        question: "💡 퀴즈 1. 방금 보여드린 우리 파트 ITO 업무 중, 압도적인 건수(690건)로 1위를 차지한 업무는 무엇일까요?",
        options: [
            "신규 시스템 아키텍처 설계",
            "콘텐츠 수정 및 추가",
            "레거시 코드 언어 마이그레이션",
            "사내 인트라넷 게시판 관리",
            "오프라인 영업점 POS 시스템 유지보수"
        ],
        answer: 1, // index of option
        explanation: "페이지 신규 구축보다, 매일매일 쏟아지는 요금제 변경, 이벤트 배너 업데이트 등 살아 숨 쉬는 사이트를 유지보수하는 일이 가장 많습니다."
    },
    {
        question: "💡 퀴즈 2. 스카이라이프 홈페이지 채널은 PC, 모바일 웹/앱이 있습니다. 그런데 조금 특이하게 TV를 조작할 때 쓰는 '이것'의 안드로이드 앱도 우리가 관리하는데요. 무엇일까요?",
        options: [
            "셋톱박스 시스템 앱",
            "TV 게임 컨트롤러 앱",
            "스마트홈 IoT 연동 앱",
            "음성인식 스피커 앱",
            "리모콘 앱"
        ],
        answer: 4,
        explanation: "맞습니다! 선호 채널 등록, 구글 음성인식까지 지원하는 스마트폰 리모콘 앱도 우리 서비스 채널 중 하나입니다."
    },
    {
        question: "💡 퀴즈 3. 불금에 서비스 장애가 터졌습니다! PM(현장 대리인)이 제일 먼저, 1순위로 해야 하는 행동은 무엇일까요?",
        options: [
            "퇴근 시간을 미루고 혼자 원인 코드를 수정한다",
            "장애가 해결될 때까지 숨죽여 기다린다",
            "SMS나 메신저(Teams 등)로 비상 연락 채널(공유방)을 개설하여 현황을 전파한다",
            "고객센터에 전화를 걸어 항의를 대신 받는다",
            "내일 아침에 출근해서 천천히 확인한다"
        ],
        answer: 2,
        explanation: "정답! 절대 혼자 끙끙대며 고치면 안 됩니다. 즉시 공유방을 파서 유관 부서를 소환하고, 원인 분석과 고객 알림을 동시에 병렬로 진행해야 피해를 최소화할 수 있습니다."
    },
    {
        question: "💡 퀴즈 4. 스카이라이프 홈페이지 서비스가 지원하는 채널이 아닌 것은 무엇입니까?",
        options: [
            "A. 안드로이드 및 iOS 모바일 앱",
            "B. 스마트 워치 전용 앱",
            "C. PC 및 모바일 웹 브라우저",
            "D. 안드로이드 기반 리모컨",
            "E. (기타 플랫폼)"
        ],
        answer: 1, // B. 스마트 워치 전용 앱
        explanation: "교육 자료에서 언급된 4가지 주요 웹/앱 서비스 플랫폼에 스마트 워치 전용 앱은 포함되지 않습니다."
    },
    {
        question: "💡 퀴즈 5. 기업 홈페이지(Corporate Web)에서 주로 다루는 콘텐츠가 아닌 것은 무엇입니까?",
        options: [
            "A. 경영 정보 및 지속가능경영 보고",
            "B. 투자정보(IR) 및 공시 자료",
            "C. 인재 채용 및 회사 홍보",
            "D. VOD 무비초이스 상세 편성표",
            "E. (기타 기업 공지)"
        ],
        answer: 3, // D. VOD 무비초이스 상세 편성표
        explanation: "일반 고객을 위한 '판매 및 이용' 정보(VOD 편성표 등)와 대외적인 '기업 정보'(경영, 투자, 채용 등)의 차이를 구분해 보세요."
    },
    {
        question: "💡 퀴즈 6. 시스템 구성도에서 'CMS'가 관리하는 주요 데이터가 아닌 것은 무엇입니까?",
        options: [
            "A. 셋톱박스 실시간 연결 제어",
            "B. 운영자 및 회원 권한 관리",
            "C. 이벤트 관리 및 게시판 관리",
            "D. 유/무선 상품 및 채널 정보 관리",
            "E. (기타 백오피스 데이터)"
        ],
        answer: 0, // A. 셋톱박스 실시간 연결 제어
        explanation: "관리자(Admin)가 웹사이트 내용을 수정하기 위해 사용하는 도구인 CMS의 역할에 셋톱박스 실시간 통신 제어는 포함되지 않습니다."
    }
];

// --- State ---
let currentScriptIndex = 0;
let isTyping = false;
let currentQuestionIndex = 0;

// --- Elements ---
const comicSection = document.getElementById('comic-section');
const comicTextEl = document.getElementById('comic-text');
const nextComicBtn = document.getElementById('next-comic-btn');

const resourcesSection = document.getElementById('resources-section');
const startQuizBtn = document.getElementById('start-quiz-btn');

const quizSection = document.getElementById('quiz-section');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackDesc = document.getElementById('feedback-desc');
const nextQuestionBtn = document.getElementById('next-question-btn');
const quizProgressEl = document.getElementById('quiz-progress');
const questionTrackerEl = document.getElementById('question-tracker');

const videoSection = document.getElementById('video-section');
const finishBtn = document.getElementById('finish-btn');
const bonusVideo = document.getElementById('bonus-video');

const resultSection = document.getElementById('result-section');
const restartBtn = document.getElementById('restart-btn');

// --- Functions ---

function typeWriter(text, element, speed = 15) {
    return new Promise(resolve => {
        isTyping = true;
        element.innerHTML = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                // handle HTML tags natively
                if (text.substring(i, i + 4) === '<br>') {
                    element.innerHTML += '<br>';
                    i += 4;
                } else if (text.substring(i, i + 8) === '<strong>') {
                    element.innerHTML += '<strong>';
                    i += 8;
                } else if (text.substring(i, i + 9) === '</strong>') {
                    element.innerHTML += '</strong>';
                    i += 9;
                } else if (text.substring(i, i + 38) === "<strong style='color: var(--primary)'>") {
                    element.innerHTML += "<strong style='color: var(--primary)'>";
                    i += 38;
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(type, speed);
            } else {
                isTyping = false;
                resolve();
            }
        }
        type();
    });
}

async function showComicScript() {
    nextComicBtn.style.display = 'none';
    const script = comicScripts[currentScriptIndex];
    const fullText = `<strong>${script.title}</strong><br><br>${script.text}`;
    await typeWriter(fullText, comicTextEl, 15);
    nextComicBtn.style.display = 'inline-block';

    if (currentScriptIndex === comicScripts.length - 1) {
        nextComicBtn.innerText = "자료 확인하고 퀴즈 풀기 ➔";
    }
}

let pdfRendered = false;

function showSection(sectionToShow) {
    [comicSection, resourcesSection, quizSection, videoSection, resultSection].forEach(sec => {
        if (sec === sectionToShow) {
            sec.classList.remove('hidden');
        } else {
            sec.classList.add('hidden');
        }
    });

    if (sectionToShow === resourcesSection && !pdfRendered) {
        renderPDF();
    }
}

async function renderPDF() {
    const url = 'SkyLife_Operations_Guide_(2).pdf';
    const container = document.getElementById('pdf-container');
    const loadingMsg = document.getElementById('pdf-loading-msg');

    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        loadingMsg.style.display = 'none';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.5 });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            container.appendChild(canvas);

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            await page.render(renderContext).promise;
        }
        pdfRendered = true;
    } catch (error) {
        console.error('Error rendering PDF:', error);
        loadingMsg.innerText = "자료를 불러오는데 실패했습니다. (파일이 같은 폴더에 있는지 확인해주세요)";
    }
}

function loadQuestion() {
    const qData = quizData[currentQuestionIndex];
    questionTextEl.innerText = qData.question;
    optionsContainer.innerHTML = '';
    feedbackContainer.classList.add('hidden');

    // Update progress
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    quizProgressEl.style.width = `${progress}%`;
    questionTrackerEl.innerText = `문제 ${currentQuestionIndex + 1} / ${quizData.length}`;

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = `${idx + 1}. ${opt}`;
        btn.onclick = () => handleOptionClick(idx, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(selectedIndex, btnElement) {
    const qData = quizData[currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.option-btn');

    // Disable all options
    allOptions.forEach(btn => btn.disabled = true);

    if (selectedIndex === qData.answer) {
        btnElement.classList.add('correct');
        feedbackTitle.innerText = "🎉 정답입니다!";
        feedbackTitle.className = "success";
    } else {
        btnElement.classList.add('wrong');
        allOptions[qData.answer].classList.add('correct');
        feedbackTitle.innerText = "❌ 아쉽네요! 정답은...";
        feedbackTitle.className = "error";
    }

    feedbackDesc.innerHTML = `<strong>해설:</strong> ${qData.explanation}`;
    feedbackContainer.classList.remove('hidden');

    if (currentQuestionIndex === quizData.length - 1) {
        nextQuestionBtn.innerText = "마무리 영상 보기 🎬";
    } else {
        nextQuestionBtn.innerText = "다음 문제 ➔";
    }
}

// --- Event Listeners ---

nextComicBtn.addEventListener('click', () => {
    if (isTyping) return;

    currentScriptIndex++;
    if (currentScriptIndex < comicScripts.length) {
        showComicScript();
    } else {
        showSection(resourcesSection);
    }
});

startQuizBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    showSection(quizSection);
    loadQuestion();
});

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizProgressEl.style.width = '100%';
        questionTrackerEl.innerText = `완료!`;
        setTimeout(() => {
            showSection(videoSection);
        }, 500);
    }
});

finishBtn.addEventListener('click', () => {
    if (bonusVideo) bonusVideo.pause(); // Stop video when moving to result
    showSection(resultSection);

    // Delay confetti so it seems like the team pops it
    setTimeout(() => {
        createConfetti();
    }, 800);
});

restartBtn.addEventListener('click', () => {
    currentScriptIndex = 0;
    currentQuestionIndex = 0;
    nextComicBtn.innerText = "다음으로 ➔";

    // Clear confetti
    const confettiContainer = document.querySelector('.confetti-container');
    if (confettiContainer) confettiContainer.innerHTML = '';

    showSection(comicSection);
    showComicScript();
});

// --- Confetti Effect ---
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    container.innerHTML = '';

    const colors = ['#fce18a', '#ff726d', '#b48def', '#f4306d', '#50E3C2', '#4A90E2'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');

        // Random properties
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random dimensions for variety
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size * (Math.random() > 0.5 ? 2 : 1) + 'px';
        if (Math.random() > 0.5) confetti.style.borderRadius = '50%'; // mix of circles and rectangles

        container.appendChild(confetti);
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showComicScript, 1000); // Wait for fade-in animation
});
