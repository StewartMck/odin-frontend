import Avatar from '@material-ui/core/Avatar';

export default function Avatars(props) {
    return (
        
        <div className="avatar">
            <Avatar alt="Dog Friendly" src="../../Assets/Icons/Dog.svg" title="Good with other dogs"
            className={!props.data.DogFriendly ? 'disabled' : ''}/>
            <Avatar alt="Cat Friendly " src="../../Assets/Icons/Cat.svg" title="Good with cats" 
            className={!props.data.CatFriendly ? 'disabled' : ''}/>
            <Avatar alt="Child Friendly" src="../../Assets/Icons/Child.svg" title="Good with children"
            className={!props.data.KidFriendly ? 'disabled' : ''}/>
        </div>
    )
};