import React, { Component } from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Notification, Help, User } from 'grommet-icons';

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '100' }}
      {...props}
    />
  );

class App extends Component {
  state = {
    showSidebar: false,
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={hpe} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>Test As As Serice OK</Heading>
          <AppBar>
            <Button 
              icon={<Notification/>}
              onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
            />
           <Button icon={<User />} onClick={() => {}} />
           <Button icon={<Help />} onClick={() => {}} />
          </AppBar>
        </AppBar>
        <Box direction='row' flex>
            <Box flex align='center' justify='center'>
              app body
            </Box>
            {showSidebar && (
              <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            )}
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
