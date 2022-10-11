/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFrame = /* GraphQL */ `
  mutation CreateFrame(
    $input: CreateFrameInput!
    $condition: ModelFrameConditionInput
  ) {
    createFrame(input: $input, condition: $condition) {
      id
      name
      order_f
      priority_id
      update_photocollec
      archived
      archived_at
      workflow_id
      fbxid
      ref_fbxid
      deleted_at
      reshoot
      abandoned
      forced_fbxid
      forced_photocollec
      forced_complete_wf
      quit_abandon
      handmade
      symmetry
      brand_id
      deployment
      glasses_id
      userId
      username
      tasks {
        nextToken
      }
      createdAt
      updatedAt
      sessionFrameId
    }
  }
`;
export const updateFrame = /* GraphQL */ `
  mutation UpdateFrame(
    $input: UpdateFrameInput!
    $condition: ModelFrameConditionInput
  ) {
    updateFrame(input: $input, condition: $condition) {
      id
      name
      order_f
      priority_id
      update_photocollec
      archived
      archived_at
      workflow_id
      fbxid
      ref_fbxid
      deleted_at
      reshoot
      abandoned
      forced_fbxid
      forced_photocollec
      forced_complete_wf
      quit_abandon
      handmade
      symmetry
      brand_id
      deployment
      glasses_id
      userId
      username
      tasks {
        nextToken
      }
      createdAt
      updatedAt
      sessionFrameId
    }
  }
`;
export const deleteFrame = /* GraphQL */ `
  mutation DeleteFrame(
    $input: DeleteFrameInput!
    $condition: ModelFrameConditionInput
  ) {
    deleteFrame(input: $input, condition: $condition) {
      id
      name
      order_f
      priority_id
      update_photocollec
      archived
      archived_at
      workflow_id
      fbxid
      ref_fbxid
      deleted_at
      reshoot
      abandoned
      forced_fbxid
      forced_photocollec
      forced_complete_wf
      quit_abandon
      handmade
      symmetry
      brand_id
      deployment
      glasses_id
      userId
      username
      tasks {
        nextToken
      }
      createdAt
      updatedAt
      sessionFrameId
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      name
      order_s
      archived
      archived_at
      deleted_at
      score_calib
      Frame {
        nextToken
      }
      createdAt
      updatedAt
      boxSessionId
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      name
      order_s
      archived
      archived_at
      deleted_at
      score_calib
      Frame {
        nextToken
      }
      createdAt
      updatedAt
      boxSessionId
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      name
      order_s
      archived
      archived_at
      deleted_at
      score_calib
      Frame {
        nextToken
      }
      createdAt
      updatedAt
      boxSessionId
    }
  }
`;
export const createBox = /* GraphQL */ `
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      session {
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateBox = /* GraphQL */ `
  mutation UpdateBox(
    $input: UpdateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    updateBox(input: $input, condition: $condition) {
      id
      session {
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteBox = /* GraphQL */ `
  mutation DeleteBox(
    $input: DeleteBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    deleteBox(input: $input, condition: $condition) {
      id
      session {
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const createFrameHasTask = /* GraphQL */ `
  mutation CreateFrameHasTask(
    $input: CreateFrameHasTaskInput!
    $condition: ModelFrameHasTaskConditionInput
  ) {
    createFrameHasTask(input: $input, condition: $condition) {
      id
      task
      status
      updated
      start_date
      end_date
      error_code {
        codeErrors
        description
      }
      createdAt
      updatedAt
      frameTasksId
      frameTasksUserId
    }
  }
`;
export const updateFrameHasTask = /* GraphQL */ `
  mutation UpdateFrameHasTask(
    $input: UpdateFrameHasTaskInput!
    $condition: ModelFrameHasTaskConditionInput
  ) {
    updateFrameHasTask(input: $input, condition: $condition) {
      id
      task
      status
      updated
      start_date
      end_date
      error_code {
        codeErrors
        description
      }
      createdAt
      updatedAt
      frameTasksId
      frameTasksUserId
    }
  }
`;
export const deleteFrameHasTask = /* GraphQL */ `
  mutation DeleteFrameHasTask(
    $input: DeleteFrameHasTaskInput!
    $condition: ModelFrameHasTaskConditionInput
  ) {
    deleteFrameHasTask(input: $input, condition: $condition) {
      id
      task
      status
      updated
      start_date
      end_date
      error_code {
        codeErrors
        description
      }
      createdAt
      updatedAt
      frameTasksId
      frameTasksUserId
    }
  }
`;
