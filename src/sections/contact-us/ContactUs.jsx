import style from './ContactUs.module.css'

function ContactUs() {
    return (
        <div className={style.ContactUs}>
            <h2>Обратная связь</h2>

            <p className={style.description}>
                Свяжитесь с нами - любые предложения или замечания помогают нам расти и развиваться
            </p>

            <div className={style.links}>
                {/* <a 
                    href="mailto:your@email.com" 
                    className={style.link}
                >
                    Написать на Email
                </a> */}

                <a 
                    href="https://forms.gle/iwP1Zfj8KvutWhKZ9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={style.link}
                >
                    Перейти к Google Form
                </a>
            </div>
        </div>
    )
}

export default ContactUs