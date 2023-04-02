import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const MemoList = () => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/memos/');
      console.log(response.data)
      setMemos(response.data);
    } catch (error) {
      console.error('Error fetching memos:', error);
    }
  };

  return (
    <View>
      {memos.map((memo, index) => (
        <Text key={index}>{memo.title}</Text>
      ))}
    </View>
  );
};

export default MemoList;