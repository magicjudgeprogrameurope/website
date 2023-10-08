import { KeyMember } from "types";

import { KeyMemberCard } from 'components';

interface propsKeyMembers {
    members: KeyMember[];
}

export default function KeyMembers (props: propsKeyMembers) {
    return <div className="d-flex bg-secondarylight">{props.members.map((member: KeyMember) => <div className="w-25 p-4"><KeyMemberCard member={member}/></div>)}</div>;
}