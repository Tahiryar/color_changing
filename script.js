var rect = document.querySelector('#center');
        rect.addEventListener('mouseover', (details) => {
            var rectLocation = rect.getBoundingClientRect();
            var insideRectVal = details.clientX - rectLocation.left;

            if (insideRectVal < rectLocation.width / 2) {
                var redColor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, insideRectVal);
                gsap.to(rect, {
                    backgroundColor: `rgb(${redColor}, 0, 0)`,
                    ease: 'power4.out',
                });
            } else {
                var blueColor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, insideRectVal);
                gsap.to(rect, {
                    backgroundColor: `rgb(0, 0, ${blueColor})`,
                    ease: 'power4.out',
                });
            }
        });

        rect.addEventListener('mouseleave', () => {
            gsap.to(rect, {
                backgroundColor: 'white'
            });
        });