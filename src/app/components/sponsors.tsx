import Image from 'next/image';
import Link from 'next/link';

export default function Sponsors() {
  return (
    <div className='py-2 my-2 max-w-2xl'>
      <div>
        <h2 className='font-normal py-2 text-2xl'>
          Deschutes Tech Guild is proudly sponsored by Snyk!
        </h2>
        <div className='font-[400] text-lg'>
          <p>
            Snyk finds and automatically fixes vulnerabilities in your code,
            open source dependencies, containers, and IaC — powered by Snyk’s
            industry-leading security intelligence and DeepCode AI. And the best
            part? It's got a free-forever user plan for personal projects!
          </p>
        </div>
        <div className='py-2 my-5 mb-10 md:py-1 flex justify-center'>
          <Link
            href='https://snyk.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='w-[auto] h-[auto]'
              src='/images/snyk.png'
              alt='synk logo'
              height={500}
              width={375}
              priority
            />
          </Link>
        </div>
        <div className='py-2 my-2 max-w-2xl'>
          <h2 className='font-normal py-2 text-2xl'>
            Deschutes Tech Guild is also proudly sponsored by CraftCMS!
          </h2>
          <div className='font-[400] text-lg'>
            <p>
              Craft CMS is a powerful, flexible, and secure content management
              system made for developers, designers, and content creators. It
              offers a user-friendly interface, allowing you to easily create
              custom websites, blogs, and applications tailored to your unique
              needs. With Craft CMS, you can unleash your creativity and bring
              your vision to life by creating web applications that stand out
              from the crowd and captivate your audience.
            </p>
          </div>
          <div className='py-2 my-5 mb-10 md:py-1 flex justify-center'>
            <Link
              href='https://craftcms.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='w-[auto] h-[auto]'
                src='/images/craft-cms.png'
                alt='craft cms logo'
                height={500}
                width={375}
                priority
              />
            </Link>
          </div>
        </div>
        <div className='text-lg'></div>
      </div>
    </div>
  );
}
