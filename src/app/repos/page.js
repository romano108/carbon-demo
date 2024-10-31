'use client';

import { useState } from 'react';
import {
  Button,
  TextInput,
  Modal,
  Dropdown,
  ContentSwitcher,
  Switch,
} from 'carbon-components-react';

export default function RepoPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const items = [
    { id: 'option-1', label: 'Option 1' },
    { id: 'option-2', label: 'Option 2' },
    { id: 'option-3', label: 'Option 3' },
  ];

  return (
    <div>
      <h1>REPO PAGE</h1>

      <TextInput
        id="repo-search"
        labelText="Search Repositories"
        placeholder="Enter repo name"
      />

      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal
        open={isModalOpen}
        modalHeading="Repository Info"
        primaryButtonText="Close"
        onRequestClose={() => setModalOpen(false)}
        onRequestSubmit={() => setModalOpen(false)}
      >
        <p>This is an overlay to show repository details.</p>
      </Modal>

      <Dropdown
        id="dropdown"
        titleText="Select Option"
        label="Choose an option"
        items={items}
        itemToString={(item) => (item ? item.label : '')}
        onChange={({ selectedItem }) => console.log('Selected:', selectedItem)}
      />

      <ContentSwitcher
        onChange={(event) => console.log('Switched to:', event.name)}
      >
        <Switch name="First" text="First" />
        <Switch name="Second" text="Second" />
        <Switch name="Third" text="Third" />
      </ContentSwitcher>
    </div>
  );
}
