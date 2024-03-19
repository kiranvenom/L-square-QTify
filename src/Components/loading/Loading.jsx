import { AiOutlineLoading } from 'react-icons/ai';

const Loading = () => {
	return (
		<div className='blackB'>
			<AiOutlineLoading
				className='animate-spin font-bold'
				size={60}
				color='blue'
			/>
		</div>
	);
};

export default Loading;
