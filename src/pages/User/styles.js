import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Header = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-color: #eee;
  padding-bottom: 20px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #999;
`;

export const Bio = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  margin-top: 5px;
  color: #999;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.TouchableOpacity`
  background: #f5f5f5;
  margin-bottom: 20px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 15px;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StarsEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
