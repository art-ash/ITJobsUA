function Preloader(props) {
    return (
        <div {...props}>
            <div className='spinner-border text-light' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
}

export default Preloader;
