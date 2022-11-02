import {useRef} from 'react'

const Contact = () => {
    const form = useRef()
    const sendEmail = () => {};
  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name:<input type="text" name="user_name" required/></label>
            <label>Email:<input type="eamil" name="user_email" required/></label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Contact