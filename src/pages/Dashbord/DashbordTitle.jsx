

const DashbordTitle = ({heading, subHadding}) => {
    return (
        <div className='w-3/4 mx-auto text-center my-8'>
            <p className='text-yellow-600 mb-3'>--- {subHadding} ---</p>
            <p className='text-4xl uppercase border-y-4 py-4 '>{heading}</p>

        </div>
    );
};

export default DashbordTitle;