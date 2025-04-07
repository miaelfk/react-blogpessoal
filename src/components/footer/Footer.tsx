import {GithubLogo, InstagramLogo, LinkedinLogo 
} from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                    © {data}
                        </p>
                    <p className='text-lg'>Minhas redes sociais</p>
                    <div className='flex gap-2'>
	                        <a href="https://www.linkedin.com/in/samiaelfakihfranca/" target="_blank">
    	                    <LinkedinLogo size={30} weight='bold' />
                        </a>
                            <a href="https://www.instagram.com/miaelfk/" target="_blank">
    	                    <InstagramLogo size={30} weight='bold' />
                        </a>
                            <a href="https://github.com/miaelfk" target="_blank">
    	                    <GithubLogo size={30} weight='bold' />
	                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer