import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.ris.world/wp-content/uploads/2019/10/Why-ISO-standards-are-crucial-for-organic-and-natural-transparency-CFTAS-president_wrbm_large.jpg" />
                <Dropdown pointing="top left" text="Umut">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgileri" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
