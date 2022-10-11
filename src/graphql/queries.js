/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFrame = /* GraphQL */ `
  query GetFrame($id: ID!, $userId: String!) {
    getFrame(id: $id, userId: $userId) {
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
export const listFrames = /* GraphQL */ `
  query ListFrames(
    $id: ID
    $userId: ModelStringKeyConditionInput
    $filter: ModelFrameFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFrames(
      id: $id
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        createdAt
        updatedAt
        sessionFrameId
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        order_s
        archived
        archived_at
        deleted_at
        score_calib
        createdAt
        updatedAt
        boxSessionId
      }
      nextToken
    }
  }
`;
export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
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
export const listBoxes = /* GraphQL */ `
  query ListBoxes(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFrameHasTask = /* GraphQL */ `
  query GetFrameHasTask($id: ID!) {
    getFrameHasTask(id: $id) {
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
export const listFrameHasTasks = /* GraphQL */ `
  query ListFrameHasTasks(
    $filter: ModelFrameHasTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFrameHasTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        task
        status
        updated
        start_date
        end_date
        createdAt
        updatedAt
        frameTasksId
        frameTasksUserId
      }
      nextToken
    }
  }
`;
export const task = /* GraphQL */ `
  query Task(
    $task: Task!
    $sortDirection: ModelSortDirection
    $filter: ModelFrameHasTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    task(
      task: $task
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        task
        status
        updated
        start_date
        end_date
        createdAt
        updatedAt
        frameTasksId
        frameTasksUserId
      }
      nextToken
    }
  }
`;
