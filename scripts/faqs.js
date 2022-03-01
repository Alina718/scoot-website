const toggles = document.querySelectorAll('.faqs-toggle');
const content = document.querySelectorAll('.faqs-item-content');
const arrowIcon = document.querySelectorAll('.arrow-icon');

for(let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if(parseInt(content[i].style.height)
            != content[i].scrollHeight) {
                content[i].style.height = content[i].scrollHeight + 'px';
                content[i].style.marginTop = "1em";
                arrowIcon[i].style.transform = 'matrix(1, 0, 0, -1, 0, 0)';
            } else {
                content[i].style.height = '0px';
                content[i].style.marginTop = "0em";
                arrowIcon[i].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
            }

            for(let a = 0; a < content.length; a++) {
                if (a !== i) {
                    content[a].style.height = '0px';
                    content[a].style.marginTop = "1em";
                    arrowIcon[a].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                }
            }
    });
}

