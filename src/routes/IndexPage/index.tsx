import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './index.scss';
import { Typography, Divider } from 'antd';
import { Link } from 'dva/router';
const { Title, Paragraph, Text } = Typography;


function Home() {
    return (
        <div>
            <Typography>
                <Title>欢迎来到react-hooks的新特性介绍</Title>
                <Paragraph>
                    本篇文章介绍了一些关于React Hooks新特性以及其他一些常用知识
                </Paragraph>

                <Paragraph>
                    目录结构:
                    <ul>
                        <li><Link to="/count">最简单的计数器例子</Link></li>
                        <li><Link to="/list">简单的列表加载例子</Link></li>
                        <li><Link to="/advanced_list">复杂的列表加载例子</Link></li>
                    </ul>
                </Paragraph>
            </Typography>
        </div>
    )
}

export default Home;

