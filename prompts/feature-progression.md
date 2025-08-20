# Feature Progression

## Goal

When a new feature is being planned, persist the plan in a new markdown file inside the folder "plans".

## Content

The plan should contain:

- An overview of the feature
- Vertically sliced parts of the feature

### Vertical slices

Slice the feature into smaller parts where each part delivers full-stack value to the end user.
Each added vertical slice can improve an existing part or add new parts to the feature.

The vertical slices should have the following:

- A list of the horizontal layers needed to be implemented
- A test list to track progress of test cases

#### Example

```
## Slice 1: Sign-in with secret

The user signs in with a secret set as an environment variable in the backend

### Horizontal layers

### Test list

```

### Horizontal layers

Horizontal layers refer to the technical layers that make up a vertical slice.
Create a checklist of the steps needed to implement all horizontal layers in a vertical slice. 

Each Horizontal layer should be implemented in the following order:

1. Build a frontend with data and interactions without styling and with mocked backend api layer
2. Replace the mocked backend with a real backend and mock the repository layer
3. Replace the mocked repository layer with a real database implementation
4. Style the frontend

Feel free to break down steps further, or remove steps that are not needed for a feature.:

## Example file path

 `plans/sign-in-feature.md`
