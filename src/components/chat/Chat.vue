<script setup lang="ts">
import { Badge } from '../ui/badge'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'
import { Button } from '../ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Bird, Book, Bot, Code2, CornerDownLeft, LifeBuoy, Mic, Paperclip, Rabbit, Settings, Settings2, Share, SquareTerminal, SquareUser, Triangle, Turtle, MessagesSquare } from 'lucide-vue-next'
</script>

<template>
  <!-- <ResizablePanelGroup
    id="handle-demo-group-1"
    direction="horizontal"
    class="flex min-h-screen w-full"
  >
    <ResizablePanel id="handle-demo-panel-1" :min-size="20" :max-size="90" :default-size="25">
      <aside class="h-full border-r">
        <div class="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle class="size-5 fill-foreground" />
          </Button>
        </div>
        <nav class="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon"
                  class="rounded-lg bg-muted"
                  aria-label="Chats"
                >
                  <MessagesSquare class="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" :side-offset="5">
                Chats
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon"
                  class="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser class="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" :side-offset="5">
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </ResizablePanel>
    <ResizableHandle id="handle-demo-handle-1" with-handle />
    <ResizablePanel id="handle-demo-panel-2" :default-size="90">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Content</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup> -->
  <div class="grid h-screen w-full pl-[56px]">
    <aside class="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div class="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle class="size-5 fill-foreground" />
        </Button>
      </div>
      <nav class="grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                class="rounded-lg bg-muted"
                aria-label="Chats"
              >
                <MessagesSquare class="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" :side-offset="5">
              Chats
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                class="mt-auto rounded-lg"
                aria-label="Account"
              >
                <SquareUser class="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" :side-offset="5">
              Account
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
    <div class="flex flex-col">
      <header class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 class="text-xl font-semibold">
          Vue3chat
        </h1>
        <Drawer>
          <DrawerTrigger as-child>
            <Button variant="ghost" size="icon" class="md:hidden">
              <Settings class="size-4" />
              <span class="sr-only">Settings</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent class="max-h-[80vh]">
            <DrawerHeader>
              <DrawerTitle>Configuration</DrawerTitle>
              <DrawerDescription>
                Configure the settings for the model and messages.
              </DrawerDescription>
            </DrawerHeader>
            <form class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
              <fieldset class="grid gap-6 rounded-lg border p-4">
                <legend class="-ml-1 px-1 text-sm font-medium">
                  Settings
                </legend>
                <div class="grid gap-3">
                  <Label for="model">Model</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      class="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <Rabbit class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Neural
                              <span class="font-medium text-foreground">
                                Genesis
                              </span>
                            </p>
                            <p class="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <Bird class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Neural
                              <span class="font-medium text-foreground">
                                Explorer
                              </span>
                            </p>
                            <p class="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div class="flex items-start gap-3 text-muted-foreground">
                          <Turtle class="size-5" />
                          <div class="grid gap-0.5">
                            <p>
                              Neural
                              <span class="font-medium text-foreground">
                                Quantum
                              </span>
                            </p>
                            <p class="text-xs" data-description>
                              The most powerful model for complex
                              computations.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div class="grid gap-3">
                  <Label for="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div class="grid gap-3">
                  <Label for="top-p">Top P</Label>
                  <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div class="grid gap-3">
                  <Label for="top-k">Top K</Label>
                  <Input id="top-k" type="number" placeholder="0.0" />
                </div>
              </fieldset>
              <fieldset class="grid gap-6 rounded-lg border p-4">
                <legend class="-ml-1 px-1 text-sm font-medium">
                  Messages
                </legend>
                <div class="grid gap-3">
                  <Label for="role">Role</Label>
                  <Select default-value="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">
                        System
                      </SelectItem>
                      <SelectItem value="user">
                        User
                      </SelectItem>
                      <SelectItem value="assistant">
                        Assistant
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div class="grid gap-3">
                  <Label for="content">Content</Label>
                  <Textarea id="content" placeholder="You are a..." />
                </div>
              </fieldset>
            </form>
          </DrawerContent>
        </Drawer>
        <Button
          variant="outline"
          size="sm"
          class="ml-auto gap-1.5 text-sm"
        >
          <Share class="size-3.5" />
          Share
        </Button>
      </header>
      <main class="p-4">
        <ResizablePanelGroup
          id="handle-demo-group-1"
          direction="horizontal"
          class="flex min-h-screen w-full"
        >
          <ResizablePanel id="handle-demo-panel-1" :min-size="20" :max-size="80" :default-size="25">
            <div class="relative hidden flex-col items-start gap-8 md:flex">
              <form class="grid w-full items-start gap-6">
                <fieldset class="grid gap-6 rounded-lg border p-4">
                  <legend class="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div class="grid gap-3">
                    <Label for="model">Model</Label>
                    <Select>
                      <SelectTrigger
                        id="model"
                        class="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genesis">
                          <div class="flex items-start gap-3 text-muted-foreground">
                            <Rabbit class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Neural
                                <span class="font-medium text-foreground">
                                  Genesis
                                </span>
                              </p>
                              <p class="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                          <div class="flex items-start gap-3 text-muted-foreground">
                            <Bird class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Neural
                                <span class="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p class="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div class="flex items-start gap-3 text-muted-foreground">
                            <Turtle class="size-5" />
                            <div class="grid gap-0.5">
                              <p>
                                Neural
                                <span class="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p class="text-xs" data-description>
                                The most powerful model for complex computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div class="grid gap-3">
                    <Label for="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="grid gap-3">
                      <Label for="top-p">Top P</Label>
                      <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div class="grid gap-3">
                      <Label for="top-k">Top K</Label>
                      <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="grid gap-6 rounded-lg border p-4">
                  <legend class="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>
                  <div class="grid gap-3">
                    <Label for="role">Role</Label>
                    <Select default-value="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">
                          System
                        </SelectItem>
                        <SelectItem value="user">
                          User
                        </SelectItem>
                        <SelectItem value="assistant">
                          Assistant
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div class="grid gap-3">
                    <Label for="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="You are a..."
                      class="min-h-[9.5rem]"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </ResizablePanel>
          <ResizableHandle id="handle-demo-handle-1" class="mx-4"with-handle />
          <ResizablePanel id="handle-demo-panel-2" :default-size="90">
            <div class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <Badge variant="outline" class="absolute right-3 top-3">
                Output
              </Badge>
              <div class="flex-1" />
              <form class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                <Label for="message" class="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div class="flex items-center p-3 pt-0">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button variant="ghost" size="icon">
                          <Paperclip class="size-4" />
                          <span class="sr-only">Attach file</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        Attach File
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button variant="ghost" size="icon">
                          <Mic class="size-4" />
                          <span class="sr-only">Use Microphone</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        Use Microphone
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button type="submit" size="sm" class="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft class="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  </div>
</template>