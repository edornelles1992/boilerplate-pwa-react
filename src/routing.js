import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { AsyncTrunk } from 'mobx-sync'

import Stores from './stores'
import { Welcome } from './screens/'

const trunk = new AsyncTrunk(Stores, {
	storage: sessionStorage,
	storageKey: 'jobquest_session_storage',
	delay: 1e3,
  })

  /**
   * @desc load persisted stores
   */
  trunk.init().then(() => {
	// const StoragedStores = JSON.parse(trunk.storage.jobquest_session_storage)
	//carregar os dados sincronizados na storage de volta para as stores...
  }) 

export default () => {
	return (
		<Switch>
			<Route exact path='/' component={Welcome} />
		</Switch>
	)
}
