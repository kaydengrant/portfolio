import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView, useSpring, animated } from '@react-spring/web';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { OutlineButton } from '../../components';
import { openInNewTab } from '@/utils';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [contactRef, inView] = useInView({
    once: true,
  });

  const showSectionAnim = useSpring({
    opacity: inView ? 1 : 0,
    config: {
      mass: 20,
      friction: 100,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm<ContactForm>();

  const [message, setMessage] = useState<string>('');

  const onSubmit = async (formData: ContactForm) => {
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.message);
      })
      .then(() => {
        alert(message || 'Message failed to send, please try again soon.');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', message: '' });
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <>
      <span id='Contact' className='invisible' />
      <animated.div style={showSectionAnim}>
        <section
          ref={contactRef}
          className='flex flex-col-reverse items-center md:flex-row md:justify-between md:items-start'
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4 md:w-[40%]'
          >
            <span className='flex flex-row items-center gap-4'>
              <p className='underline underline-offset-4'>01</p>
              <h4 className='font-normal'>{`What's your full name?`}</h4>
            </span>
            <span className='flex flex-col w-full'>
              <input
                placeholder='Jane Smith'
                {...register('name', {
                  required: true,
                })}
              />
              <div className='text-error'>
                {errors.name?.type == 'required' && (
                  <p>Your name is required</p>
                )}
              </div>
            </span>
            <span className='flex flex-row items-center gap-4 mt-6'>
              <p className='underline underline-offset-4'>02</p>
              <h4 className='font-normal'>{`What's your email address?`}</h4>
            </span>
            <span className='flex flex-col w-full'>
              <input
                placeholder='JaneSmith@email.com'
                {...register('email', {
                  required: true,
                  pattern: /^.+@.+\..+$/,
                })}
              />
              <div className='text-error'>
                {errors.email?.type == 'required' && <p>Email is required</p>}
                {errors.email?.type == 'pattern' && (
                  <p>Must use a valid email address</p>
                )}
              </div>
            </span>
            <span className='flex flex-row items-center gap-4 mt-6'>
              <p className='underline underline-offset-4'>03</p>
              <h4 className='font-normal'>{`Send me a message.`}</h4>
            </span>
            <span className='flex flex-col w-full'>
              <textarea
                className='h-24'
                placeholder='Type about your company, team, and/or project.'
                {...register('message', { required: true })}
              />
              <div className='text-error'>
                {errors.message?.type == 'required' && (
                  <p>Your message is required</p>
                )}
              </div>
            </span>
            <div className='flex justify-center'>
              <OutlineButton
                text='Submit'
                Tag={'h4'}
                icon={<FaArrowRight size={20} />}
              />
            </div>
          </form>
          <div className='flex flex-col text-center w-[80%] md:w-[40%] md:text-right gap-8'>
            <h1 className='leading-10'>
              {`Let's Work `}
              <span className='text-darkGreen dark:text-green leading-[4.5rem]'>
                Together
              </span>
            </h1>
            <h4 className='font-normal'>
              {`Fill out the form provided and I'll get back to you in the next 48
          hours.`}
            </h4>
            <div className='flex justify-center mb-16 md:mb-0 md:justify-end gap-6'>
              <span
                className='clickable'
                onClick={openInNewTab(
                  'https://www.linkedin.com/in/kaydengrant/'
                )}
              >
                <FaLinkedin size={40} />
              </span>
              <span
                className='clickable'
                onClick={openInNewTab('https://github.com/kaydengrant')}
              >
                <FaGithub size={40} />
              </span>
              <span
                className='clickable'
                onClick={openInNewTab('https://twitter.com/kaydengr')}
              >
                <FaTwitter size={40} />
              </span>
            </div>
          </div>
        </section>
      </animated.div>
    </>
  );
};

export default Contact;
