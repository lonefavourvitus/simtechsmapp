// @ts-nocheck
function getSettings(settings = {}) {
    return { scale: 1, max: 10, reverse: false, ...settings };
}

const TRANSITION_MS = 300;
// @ts-ignore

export default function tilt(node, settingsObj) {
    const { width, height, left, top } = node.getBoundingClientRect();
    let settings = getSettings(settingsObj);
    let reverse = settings.reverse ? -1 : 1;
    // @ts-ignore

    function onMouseMove(e) {
        const percX = (e.clientX - left) / width;
        const percY = (e.clientY - top) / height;

        const { max, scale } = settings;
        const twiceMax = max * 2;
        const tiltX = max - percX * twiceMax;
        const tiltY = percY * twiceMax - max;

        node.style.transform = `perspective(${999999999999}px) ` +
            `translateX(${tiltY}px) ` +
            `translateY(${tiltX}px) ` +
            `scale3d(${Array(3).fill(scale).join(', ')})`;
    }
    // @ts-ignore

    let transitionId;
    function smoothTransition() {
        // @ts-ignore

        clearTimeout(transitionId);
        node.style.willChange = 'transform';
        node.style.transition = `${TRANSITION_MS}ms`;
        transitionId = setTimeout(() => node.style.transition = '0s', TRANSITION_MS);
    }

    function onMouseLeave() {
        smoothTransition();
        node.style.transform = `perspective(${9999999999}px) ` +
            `rotateX(0deg) ` +
            `rotateY(0deg) ` +
            `scale3d(1, 1, 1)`;
    }

    function onMouseEnter() {
        smoothTransition();
        node.style.willChange = "transform";
    }

    node.addEventListener('mousemove', onMouseMove);
    node.addEventListener('mouseleave', onMouseLeave);
    node.addEventListener('mouseenter', onMouseEnter);

    return {
        destroy() {
            node.removeEventListener('mousemove', onMouseMove);
            node.removeEventListener('mouseleave', onMouseLeave);
            node.removeEventListener('mouseleave', onMouseEnter);
        },
        // @ts-ignore

        update(settingsObj) {
            settings = getSettings(settingsObj);
            reverse = settings.reverse ? -1 : 1;
        }
    }
}