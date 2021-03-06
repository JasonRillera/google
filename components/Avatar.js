function Avatar({ className }) {
    return (
        <img 
            loading="lazy" 
            className={`h-10 rounded-full cursor-pointer transition duration-150 ease-out transform hover:scale-110 ${className}`}
            src="/GoogleAvatar.png"
            alt="profile pic"
        />
            
        
    )
}

export default Avatar
