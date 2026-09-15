"use client"

import * as Select from "@radix-ui/react-select"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

type ThemedSelectProps = {
  id: string
  name: string
  value: string
  onValueChange: (value: string) => void
  options: ReadonlyArray<{ value: string; label: string }>
  icon?: IconDefinition
  required?: boolean
}

export function ThemedSelect({ id, name, value, onValueChange, options, icon, required }: ThemedSelectProps) {
  return (
    <Select.Root name={name} value={value} onValueChange={onValueChange} required={required}>
      <Select.Trigger id={id} className="flex min-h-12 w-full items-center justify-between gap-4 border-b border-midnight-blue/30 bg-transparent py-3 text-left font-sans text-base text-midnight-blue transition-colors hover:border-midnight-blue/60 focus:border-terracotta focus:outline-none">
        <Select.Value />
        <Select.Icon className="text-terracotta"><FontAwesomeIcon icon={icon ?? faChevronDown} className="size-4" /></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={8} className="z-[100] min-w-[var(--radix-select-trigger-width)] overflow-hidden border border-midnight-blue/15 bg-cream text-midnight-blue shadow-[0_20px_60px_rgba(32,41,37,0.2)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <Select.ScrollUpButton className="flex h-10 items-center justify-center bg-cream text-terracotta"><FontAwesomeIcon icon={faChevronUp} className="size-3" /></Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} className="relative flex min-h-11 cursor-default select-none items-center py-3 pl-10 pr-4 font-sans text-sm outline-none transition-colors data-[highlighted]:bg-terracotta data-[highlighted]:text-white data-[state=checked]:font-semibold">
                <Select.ItemIndicator className="absolute left-4 flex items-center"><FontAwesomeIcon icon={faCheck} className="size-3" /></Select.ItemIndicator>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-10 items-center justify-center bg-cream text-terracotta"><FontAwesomeIcon icon={faChevronDown} className="size-3" /></Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
