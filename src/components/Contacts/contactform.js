import React from 'react'
import { Link } from 'gatsby'

const ContactForm = () => {
    return (
        <div className="contact">
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="contact__area">
                    <TextField
                        id="name"
                        className="contact__field"
                        name="name"
                        label="お名前"
                        type="text"
                        variant="outlined"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact__area">
                    <TextField
                        id="email"
                        className="contact__field"
                        name="email"
                        label="メールアドレス"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact__area">
                    <TextField
                        id="subject"
                        className="contact__field"
                        name="subject"
                        label="件名"
                        type="text"
                        variant="outlined"
                        value={subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact__area">
                    <TextField
                        id="message"
                        className="contact__field"
                        name="message"
                        label="問い合わせ内容"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={message}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact__btn">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={canSubmit()}
                    >
                        送信
                    </Button>
                </div>
            </form>
        </div>    );
}

export default ContactForm