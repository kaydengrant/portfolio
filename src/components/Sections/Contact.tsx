import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useInView, useSpring, animated } from '@react-spring/web';
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { OutlineButton } from '../../components';

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

  const [status, setStatus] = useState('');

  const onSubmit = async (formData: ContactForm) => {
    try {
      const res = await fetch('/api/mail', {
        body: JSON.stringify(formData),
        method: 'POST',
      });

      const body = await res.json();
      console.log('body is=', body);

      if (body.message == 'ok') {
        setStatus('success');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful && status === 'success') {
      alert("Success! Thanks for reaching out, I'll be in touch shortly.");
      reset({ name: '', email: '', message: '' });
    }
  }, [formState, isSubmitSuccessful, reset, status]);

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
            <div className='flex justify-center mb-16 md:mb-0 md:justify-end gap-4'>
              <Link
                href={'https://www.linkedin.com/in/kaydengrant/'}
                target='_blank'
              >
                <OutlineButton
                  text='LinkedIn'
                  Tag={'p'}
                  icon={<FaLinkedinIn size={25} />}
                  iconFirst
                />
              </Link>
              <Link href={'https://github.com/kaydengrant'} target='_blank'>
                <OutlineButton
                  text='Github'
                  Tag={'p'}
                  icon={<FaGithub size={25} />}
                  iconFirst
                />
              </Link>
            </div>
          </div>
        </section>
      </animated.div>
    </>
  );
};

export default Contact;
