import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/nebstech',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adoniscasado/',
  },
]

export const Footer = () => {
  return (
    <footer className='relative z-30 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-300/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container relative z-20"> {/* Ensure this container is positioned and has a higher z-index */}
        <div className='border-t border-black/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-black/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8 z-30'>
            {footerLinks.map(link => (
              <a 
                href={link.href} 
                key={link.title} 
                target='_blank' 
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 z-30 cursor-pointer'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='w-4 h-4'/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
