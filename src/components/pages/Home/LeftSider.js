import React from 'react'

export default function LeftSider() {
    return (
        <div className='fixed left-0 bottom-5 px-10 sm:static'>
            <div className='flex flex-col items-center'>

                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href='https://mail.google.com/mail/'>
                    <i class="ri-mail-line text-tertiary text-xl">
                    </i></a>
                    
                    <a href="https://github.com/tahmoorali" target="_blank" rel="noopener noreferrer">
                    <i class="ri-github-fill text-tertiary text-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/tahmoor-ali-yezdani-941941248/" target="_blank" rel="noopener noreferrer">
                    <i class="ri-linkedin-box-fill text-tertiary text-xl"></i></a>
                    <i class="ri-facebook-circle-fill text-tertiary text-xl"></i>
                    <a href="https://www.instagram.com/ali.yez_/" target="_blank" rel="noopener noreferrer">
                    <i class="ri-instagram-line text-tertiary text-xl"></i></a>
                </div>
                <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>

                </div>
            </div>
        </div>
    )
}
