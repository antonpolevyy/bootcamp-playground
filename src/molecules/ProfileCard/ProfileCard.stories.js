import React from 'react';
import ProfileCard from './ProfileCard';
export default { title: 'Profile Left Rail Card' };

const sampleProfile = {
    fullName: "Seal Bobbins",
    jobTitle: "Senior Baby Seal",
    viewStats: [{
        description: `Who's viewed your profile`,
        value: '223'
    },
    {
        description: 'Views of your post',
        value: '509'
    }]
};

export const withProfile = () => <div style={{ display: 'inline-block', width: '216px' }}>
    <ProfileCard {...sampleProfile}></ProfileCard>
</div>;