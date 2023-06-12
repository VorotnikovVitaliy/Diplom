// document.querySelectorAll('.faq-block-questions__item-title').forEach((el) => {
//     el.addEventListener('click', () => {
//         let hidden_faq_text = el.nextElementSibling;
        
//         if(hidden_faq_text.style.maxHeight) {
//             document.querySelectorAll('.faq-block-questions__item-text').forEach((el) => el.style.maxHeight = null)
//         } else {
//             document.querySelectorAll('.faq-block-questions__item-text').forEach((el) => el.style.maxHeight = null)
//             hidden_faq_text.style.maxHeight = hidden_faq_text.scrollHeight + 'px'
//         }
        
//     });
    
// })

const faqTitle = document.querySelectorAll('.faq-block-questions__item-title');
const faqText = document.querySelectorAll('.faq-block-questions__item-text');

faqTitle.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if(activeContent.classList.contains('open')) {
        activeContent.classList.remove('open');
        item.classList.remove('open');
        activeContent.style.maxHeight = 0;
    } else { 
        faqText.forEach(element => {
            element.classList.remove('open');
            element.style.maxHeight = 0;
        });
        faqTitle.forEach(element => element.classList.remove('open'));
        item.classList.add('open');
        activeContent.classList.add('open');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';

    }

}))