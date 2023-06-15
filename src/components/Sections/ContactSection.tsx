import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useInView, useSpring, animated } from '@react-spring/web';

import OutlineButton from '../Buttons/OutlineButton';
import { Icon } from '../Icon';
import { openInNewTab } from '@/utils';

type ContactForm = {
  name: string;
  email: string;
  inquiry: string;
};

const ContactSection: React.FC = () => {
  const [contactRef, inView] = useInView({
    once: true,
  });

  const slideLeftAnim = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? '0px' : '-100vw',
    config: {
      friction: 50,
    },
  });

  const slideRightAnim = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? '0px' : '100vw',
    config: {
      friction: 50,
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

  const onSubmit = async (formData: ContactForm) => {
    await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert(
          `Email sent successfully! I'll get back to you as soon as I can. Thanks!`
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', inquiry: '' });
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <>
      <span id='Contact' className='invisible' />
      <section
        ref={contactRef}
        className='flex flex-col-reverse items-center md:flex-row md:justify-between md:items-start'
      >
        <animated.form
          onSubmit={handleSubmit(onSubmit)}
          style={slideLeftAnim}
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
            <div className='text-red'>
              {errors.name?.type == 'required' && <p>Your name is required</p>}
            </div>
          </span>
          <span className='flex flex-row items-center gap-4 mt-6'>
            <p className='underline underline-offset-4'>02</p>
            <h4 className='font-normal'>{`What's your email address?`}</h4>
          </span>
          <span className='flex flex-col w-full'>
            <input
              placeholder='JaneSmith@email.com'
              {...register('email', { required: true, pattern: /^.+@.+\..+$/ })}
            />
            <div className='text-red'>
              {errors.email?.type == 'required' && <p>Email is required</p>}
              {errors.email?.type == 'pattern' && (
                <p>Must use a valid email address</p>
              )}
            </div>
          </span>
          <span className='flex flex-row items-center gap-4 mt-6'>
            <p className='underline underline-offset-4'>03</p>
            <h4 className='font-normal'>{`Tell me about your inquiry.`}</h4>
          </span>
          <span className='flex flex-col w-full'>
            <textarea
              className='h-24'
              placeholder='Type about your company, team, and/or project.'
              {...register('inquiry', { required: true })}
            />
            <div className='text-red'>
              {errors.inquiry?.type == 'required' && (
                <p>Your inquiry is required</p>
              )}
            </div>
          </span>
          <div className='flex justify-center md:justify-end'>
            <OutlineButton text='Submit' Tag={'h4'} icon={Icon.Arrow} />
          </div>
        </animated.form>
        <animated.div
          style={slideRightAnim}
          className='flex flex-col text-center w-[80%] md:w-[40%] md:text-right gap-8'
        >
          <h1>
            {`Let's work `}
            <span className='text-gradient'>together</span>
          </h1>
          <div className='flex flex-col gap-4'>
            <h4 className='font-normal'>
              {`Fill out the form provided and I'll get back to you in the next 24-48
          hours.`}
            </h4>
            <p>Or contact me via email at: kagrant@uw.edu</p>
          </div>
          <div className='flex justify-center mb-16 md:mb-0 md:justify-end gap-6'>
            <span
              className='clickable'
              onClick={openInNewTab('https://github.com/kaydengrant')}
            >
              <Icon.Github />
            </span>
            <span
              className='clickable'
              onClick={openInNewTab('https://www.linkedin.com/in/kaydengrant/')}
            >
              <Icon.Linkedin />
            </span>
          </div>
        </animated.div>
      </section>
    </>
  );
};

export default ContactSection;
