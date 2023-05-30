import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import sunnyRound from './assets/sunny_round.png';
import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
function Avatar() {


  return (
    <img 
      src={sunnyRound}
      alt=""
      style={{ width: '50px', height: '50px' }}
      className="rounded-full"
    />
  );
}

function App() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <main className="bg-gray-900 w-screen h-screen flex flex-col 
    items-center justify-center text-gray-100 gap-4">
      <DropdownMenu.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenu.Trigger>
          <Avatar />
        </DropdownMenu.Trigger>

      <AnimatePresence>
        {isDropdownOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content align="start" sideOffset={6}>
              <motion.div className="max-w-[200px] bg-gray-700/80 rounded=md shadow-2xl 
              backdrop-blur-sm text-gray-200 p-3 flex flex-col gap-2 text-sm origin-top-left"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
                <DropdownMenu.Group>
                  <DropdownMenu.Item>查看个人档案</DropdownMenu.Item>
                  <DropdownMenu.Item>编辑个人档案</DropdownMenu.Item>
                  <DropdownMenu.Item>修改密码</DropdownMenu.Item>
                </DropdownMenu.Group>               
                  <DropdownMenu.Separator className='bg-gray-500/50 h-px' />
                <DropdownMenu.Group>
                  <button type='button' className='text-red-400 font-semibold'>退出登录</button>
                </DropdownMenu.Group>
              
              <DropdownMenu.Arrow />
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
      </DropdownMenu.Root>
      <p className="max-w-xs">
        Good morning, this is Stone Hoo. I am a full stack developer. I am a father of three children. I am a geek, I am a geek, I am a coder. I am currently learning React. This is a great way to learn React. Thank you very much.
      </p>
    </main>
  );
}

export default App;
