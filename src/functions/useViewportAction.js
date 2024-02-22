
// @ts-ignore
let intersectionObserver;
var options = {
    rootMargin: '0px',

    threshold: [0.5]
}
function ensureIntersectionObserver() {
    // @ts-ignore

    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                // @ts-ignore

                if (entry.target.style.cssText == 'height: fit-content;') {
                    // @ts-ignore

                    entry.target.style.cssText = 'height: 75vh !important;'
                    // entry.target.style.cssText = 'height: fit-content !important;'
                }
                const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
                entry.target.dispatchEvent(new CustomEvent(eventName));
                // console.log(intersectionObserver, entry.target.style.cssText)

            });
        }, options

    );

}
// export let element;
// @ts-ignore

export default function viewport(element) {
    // element.style.opacity = 0.5

    ensureIntersectionObserver();
    // @ts-ignore

    intersectionObserver.observe(element);

    return {
        destroy() {
            // element.style.opacity = 0
            // setTimeout(() => {
            // @ts-ignore

            intersectionObserver.unobserve(element);

            // }, 5000);
        }
    }
}