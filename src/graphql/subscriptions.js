/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFrame = /* GraphQL */ `
  subscription OnCreateFrame {
    onCreateFrame {
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
export const onUpdateFrame = /* GraphQL */ `
  subscription OnUpdateFrame {
    onUpdateFrame {
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
export const onDeleteFrame = /* GraphQL */ `
  subscription OnDeleteFrame {
    onDeleteFrame {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
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
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
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
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
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
export const onCreateFrameHasTask = /* GraphQL */ `
  subscription OnCreateFrameHasTask {
    onCreateFrameHasTask {
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
export const onUpdateFrameHasTask = /* GraphQL */ `
  subscription OnUpdateFrameHasTask {
    onUpdateFrameHasTask {
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
export const onDeleteFrameHasTask = /* GraphQL */ `
  subscription OnDeleteFrameHasTask {
    onDeleteFrameHasTask {
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
