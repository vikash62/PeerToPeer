import EStyleSheet from 'react-native-extended-stylesheet';

export default initializeStyle = () => {
  EStyleSheet.build({
    $h1: '1.875rem',    // 30px
    $h2: '1.5rem',      // 24px
    $h3: '1.25rem',     // 20px
    $h4: '1.125rem',    // 18px
    $b1: '1rem',        // 16px
    $b2: '0.875rem',    // 14px
    $f1: '0.75rem',     // 12px

    $ffReg: 'Roboto-Regular',
    $ffBold: 'Roboto-Bold',
    $ffBlack: 'Roboto-Black',

    $textLight: '#BDBDBD',
    $textReg: '#949494',
    $textDark: '#3D3D3D',

    $fillLight: '#F7F7F7',
    $fillReg: '#EEEEEE',
    $fillDark: '#BFBFBF',

    $white: '#FFF',
    $black: '#000',
    $primary: '#013D6C',
    $gradTop: '#013D6C',
    $gradBottom: '#22222C',
    $yellow: '#FDC338',
    
  });
}