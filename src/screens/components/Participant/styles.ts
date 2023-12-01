import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    gap: 12
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center'
  },
})