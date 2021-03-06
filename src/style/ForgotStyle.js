
import { StyleSheet} from 'react-native'
import { theme } from '../constants';

const styles = StyleSheet.create({
  header: {
    marginTop:50,
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,

  },
    forgot: {
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: theme.colors.gray2,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasErrors: {
      borderBottomColor: theme.colors.accent,
    }
  })
  export {styles}