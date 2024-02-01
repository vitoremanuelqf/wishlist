'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { FaUserCircle } from 'react-icons/fa'

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none">
          <FaUserCircle className="h-6 w-6 text-white sm:h-8 sm:w-8" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mr-2 mt-2 flex flex-col gap-1 rounded-md bg-white p-2 shadow-md">
          <DropdownMenu.Item className="cursor-not-allowed text-base font-normal text-gray-900 outline-none">
            Entrar
          </DropdownMenu.Item>

          <DropdownMenu.Item className="cursor-not-allowed text-base font-normal text-gray-900 outline-none">
            Minha Conta
          </DropdownMenu.Item>

          <DropdownMenu.Item className="cursor-not-allowed text-base font-normal text-gray-900 outline-none">
            Endereços
          </DropdownMenu.Item>

          <DropdownMenu.Item className="cursor-not-allowed text-base font-normal text-gray-900 outline-none">
            Minha Netshoes
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="-mt-2 fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
