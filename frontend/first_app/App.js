import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://your-django-server-ip:8000/your-api-endpoint')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView>
      <Text>{data ? JSON.stringify(data) : '데이터를 불러오는 중...'}</Text>
    </SafeAreaView>
  );
};

export default App;
