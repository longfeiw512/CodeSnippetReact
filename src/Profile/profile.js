import React from "react";
import { Avatar, Card } from "antd";
import reactCSS from 'reactcss';

const { Meta } = Card;

const styles = reactCSS({
    "default": {
        userProfileCard: {
            maxWidth: "400px",
            margin: "0 auto",
            padding: "20px",
        },
        userAvatar: {
            width: "100px",
            height: "100px",
            marginBottom: "10px"
        },
        userName: {
            fontSize: "20px",
            fontWeight: "bold"
        },
        userEmail: {
            color: "#888",
            marginBottom: "10px"
        },
        userInfo: {
            marginBottom: "10px"
        },
        userInfoLabel: {
            fontWeight: "bold",
        },
        userInfoValue: {
            marginLeft: "5px"
        }
    }
})

const MOCK_USER = {
    avatarUrl: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
    name: "Matt",
    email: "matt@123.com",
    username: "matt123",
    "location": "Germany"
}

const Profile = () => {
    return (
        <Card style={styles.userProfileCard}>
            <Meta
                avatar={<Avatar style={styles.userAvatar} src={MOCK_USER.avatarUrl} />}
                title={<h2 style={styles.userName}>{MOCK_USER.name}</h2>}
                description={<p style={styles.userEmail}>{MOCK_USER.email}</p>}
            />
            <div style={styles.userInfo}>
                <span style={styles.userInfoLabel}>Username:</span>
                <span style={styles.userInfoValue}>{MOCK_USER.username}</span>
            </div>
            <div style={styles.userInfo}>
                <span style={styles.userInfoLabel}>Location:</span>
                <span style={styles.userInfoValue}>{MOCK_USER.location}</span>
            </div>
        </Card>
    );
};

export default Profile;