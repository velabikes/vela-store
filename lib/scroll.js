const keys = { 37: true, 38: true, 39: true, 40: true }

function preventDefault(e) {
	e.preventDefault()
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e)
		return false;
	}
}

function getSupportDetails() {
	const supportsPassive = true
	const wheelOpt = supportsPassive ? { passive: false } : false
	const wheelEvent =
		'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

	return {
		wheelOpt,
		wheelEvent
	}
}

export function disableScroll() {
	if(!document) return
	document.body.style.overflow = 'hidden';
	const { wheelOpt, wheelEvent } = getSupportDetails();
	window.addEventListener('DOMMouseScroll', preventDefault, false)
	window.addEventListener(wheelEvent, preventDefault, wheelOpt)
	window.addEventListener('touchmove', preventDefault, wheelOpt)
	window.addEventListener('keydown', preventDefaultForScrollKeys, false)
}

export function enableScroll() {
	if(!document) return
	document.body.style.overflow = 'visible';
	const { wheelOpt, wheelEvent } = getSupportDetails();
	window.removeEventListener('DOMMouseScroll', preventDefault, false)
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
	window.removeEventListener('touchmove', preventDefault, wheelOpt)
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}

export const getCurrentScrollPosition = () => document.body.getBoundingClientRect().top * -1

export const getScreenHeight = () => window.screen.height;
