import {Menu} from "semantic-ui-react";

export const NavBar = () => {
    return(
        <>
            <Menu inverted>
                <Menu.Item>
                    Home
                </Menu.Item>
                <Menu.Item>
                    About
                </Menu.Item>
                <Menu.Item>
                    Contact
                </Menu.Item>
            </Menu>
        </>
    )
}