import Avatar from '@material-ui/core/Avatar';

export default function Avatars(props) {
    return (
        <div className="avatar">
            <Avatar alt="Dog Friendly" src="../../Assets/Icons/Dog.svg" title="Good with other dogs" />
            <Avatar alt="Cat Friendly " src="../../Assets/Icons/Cat.svg" title="Good with cats" />
            <Avatar alt="Child Friendly" src="../../Assets/Icons/Child.svg" title="Good with children" />
        </div>
    )
};