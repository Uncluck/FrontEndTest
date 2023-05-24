const ThemeButton = document.querySelector('.theme-button')

ThemeButton.onclick = () => {
    if (document.querySelector('.dark'))
    {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function (evt) {
        evt.preventDefault();
        const blockId = anchor.getAttribute('href')
        if (blockId === "#Top"){
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    })
}

let scrollButton = document.querySelector('.scroll-to-start')
window.onscroll = function iconToScrollStart() {
    if (window.pageYOffset > 200) {
        scrollButton.style.opacity = '1'
    } else {
        scrollButton.style.opacity = '0'
    }
}

function getDayInfo() {
    let datesArray = document.querySelectorAll('.date-page-time')
    for (let date of datesArray){
        date.innerText = new Intl.DateTimeFormat("ru", {dateStyle: "full" }).format(new Date(date.innerText));
        let dateTimeArray = date.innerText.split(' ')
        if((dateTimeArray[1] > 0) && (dateTimeArray[1] <= 7)){
            dateTimeArray[1] = '1 неделя'
        }
        if (dateTimeArray[1] > 7 && dateTimeArray[1] <= 14){
            dateTimeArray[1] = '2 неделя'

        }
        if (dateTimeArray[1] > 14 && dateTimeArray[1] <= 21){
            dateTimeArray[1] = '3 неделя'
        }
        if (dateTimeArray[1] > 21 && dateTimeArray[1] <= 28){
            dateTimeArray[1] = '4 неделя'
        }
        if (dateTimeArray[1] > 28 && dateTimeArray[1] <= 31){
            dateTimeArray[1] = '5 неделя'
        }
        date.innerText = dateTimeArray.join(' ')
    }
}

getDayInfo()


function formToPurchase(evt){
    document.querySelector(`#${evt}`).classList.remove('hide-purchase')
}

function formToClose(evt){
    document.querySelector(`#${evt}`).classList.add('hide-purchase')
}
function formPurchaseAlert(mes, evt){
    // Просим форму не отправлять данные самостоятельно

    alert(`Вы приобрели ${mes}!`)
    document.querySelector(`#${evt}`).classList.add('hide-purchase')
    window.location.reload();
}