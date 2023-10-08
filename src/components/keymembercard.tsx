import { KeyMember } from "types";

interface propsKeyMemberCard {
    member: KeyMember;
}

export default function KeyMemberCard(props: propsKeyMemberCard) {
    return (
        <div className="card">
            <img src={props.member.imagePath} className="card-img-top" alt={`${props.member.name}'s profile image`}/>
            <div className="card-body">
                <h5 className="card-title">{props.member.name}</h5>
                <p className="card-text">{props.member.description}</p>
            </div>        
        </div>
    );
}