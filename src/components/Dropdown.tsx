import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { FaUserCircle } from 'react-icons/fa'

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none">
          <FaUserCircle className="h-8 w-8 text-white" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 flex flex-col gap-2 rounded-md bg-white p-2 drop-shadow">
          <DropdownMenu.Item className="text-base font-normal text-gray-900 outline-none">
            Entrar
          </DropdownMenu.Item>

          <DropdownMenu.Item className="text-base font-normal text-gray-900 outline-none">
            Minha Conta
          </DropdownMenu.Item>

          <DropdownMenu.Item className="text-base font-normal text-gray-900 outline-none">
            Endereços
          </DropdownMenu.Item>

          <DropdownMenu.Item className="text-base font-normal text-gray-900 outline-none">
            Minha Netshoes
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
