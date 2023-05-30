"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import * as accordion from "@radix-ui/react-accordion";

export default function HomeAccordion() {
    return (
        <accordion.Root type="multiple" className="accordion-root">
            <accordion.Item value="teste 1" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
							teste nome 1
                        </p> 
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi omnis eveniet nostrum consequuntur nam facilis quae. Cum laboriosam, adipisci neque dolorem, perspiciatis voluptate nobis cupiditate, aliquam recusandae vel repudiandae possimus amet quasi. In vel, assumenda similique commodi quod consequuntur optio eos distinctio doloremque atque tempore sunt quis placeat maxime?
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 2" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
							teste nome 2
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi omnis eveniet nostrum consequuntur nam facilis quae. Cum laboriosam, adipisci neque dolorem, perspiciatis voluptate nobis cupiditate, aliquam recusandae vel repudiandae possimus amet quasi. In vel, assumenda similique commodi quod consequuntur optio eos distinctio doloremque atque tempore sunt quis placeat maxime?
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 3" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
							teste nome 3
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi omnis eveniet nostrum consequuntur nam facilis quae. Cum laboriosam, adipisci neque dolorem, perspiciatis voluptate nobis cupiditate, aliquam recusandae vel repudiandae possimus amet quasi. In vel, assumenda similique commodi quod consequuntur optio eos distinctio doloremque atque tempore sunt quis placeat maxime?
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 4" className="accordion-item">
                <accordion.Header>
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
							teste nome 4
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi omnis eveniet nostrum consequuntur nam facilis quae. Cum laboriosam, adipisci neque dolorem, perspiciatis voluptate nobis cupiditate, aliquam recusandae vel repudiandae possimus amet quasi. In vel, assumenda similique commodi quod consequuntur optio eos distinctio doloremque atque tempore sunt quis placeat maxime?
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 5" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
							teste nome 5
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi omnis eveniet nostrum consequuntur nam facilis quae. Cum laboriosam, adipisci neque dolorem, perspiciatis voluptate nobis cupiditate, aliquam recusandae vel repudiandae possimus amet quasi. In vel, assumenda similique commodi quod consequuntur optio eos distinctio doloremque atque tempore sunt quis placeat maxime?
                    </div>
                </accordion.Content>
            </accordion.Item>
        </accordion.Root>
    );
}
