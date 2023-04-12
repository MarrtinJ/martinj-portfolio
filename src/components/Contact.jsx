import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      // import.meta.env.EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATEID,
      {
        from_name: form.name,
        to_name: 'Martin',
        from_email: form.email,
        to_email: 's.martin.jiang@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLICKEY
    )
      .then(() => {
        setLoading(false)
        alert("Thanks for the message! I will get back to you as soon as possible.")

        setForm({
          name: '',
          email: '',
          message: ''
        })
      },
        (error) => {
          setLoading(false)

          console.log(error)
          alert('Something went wrong. Please try again.')
        })

  }

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-1'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="mt-4 bg-[#053819] p-8 rounded-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8'
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-white-100 py-4 px-6 placeholder:text-primary text-primary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-white-100 py-4 px-6 placeholder:text-primary text-primary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-white-100 py-4 px-6 placeholder:text-primary text-primary rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-[#daa520] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")