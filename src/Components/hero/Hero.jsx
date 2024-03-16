import earphone from '../assets/images/earphone.png';

const Hero = () => {
	return (
		<div className='w-full h-[40vh] blackB flex justify-center items-center'>
			<div className='w-[50vw] whiteT flex items-center justify-center gap-8'>
				<div className='text-center'>
					<h1 className='text-[1.6rem] font-bold'>
						100 Thousand Songs, ad-free
					</h1>
					<h1 className='text-[1.6rem] font-bold'>
						Over thousands podcast episodes
					</h1>
				</div>

				<div className='w-[212px] h-[212px]'>
					<img src={earphone} alt='earphone' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
